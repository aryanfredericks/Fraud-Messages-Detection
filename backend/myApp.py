from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
import re
import gensim.downloader as api
from predictor import FraudPredictor
#chcp 65001
model = load_model('CL_FD_MODEL_V2.keras')
wv = api.load('word2vec-google-news-300')
myApp = Flask(__name__)
sw = stopwords.words('english')
stemmer = PorterStemmer()

def preprocess_text(sentence):
    sentence = re.sub(r'[^\w\s]', '', sentence)
    words = word_tokenize(sentence.lower())
    words = [word for word in words if word.isalpha()]
    words = [word for word in words if word not in sw]
    final_words = []
    for w in words:
        try:
            final_words.append(stemmer.stem(w))
        except:
            final_words.append(w)
    return words


def tokens_to_avg_vector(tokens, wv):
    vectors = []
    for token in tokens:
        if token in wv:
            vectors.append(wv[token])
    if len(vectors) == 0:
        return np.zeros(300)
    vectors = np.array(vectors)
    return np.mean(vectors, axis=0)


@myApp.route('/', methods=['GET'])
def welcome():
    return "hello"


@myApp.route('/predict', methods=['POST'])
def predict():
    data = request.json
    sentence = data['sentence']
    print(sentence)
    tokens = preprocess_text(sentence)
    vec = tokens_to_avg_vector(tokens, wv)
    vec = np.array([vec])
    vec = np.expand_dims(vec, axis=0)
    print(vec.shape)
    print(vec)
    fp = FraudPredictor(model=model,vector=vec)
    result = fp.perform_prediction()
    return jsonify({
        'message': 'done',
        'result' : result
    })


def remove_stopwords(sentence):
    words = word_tokenize(sentence.lower())
    words = [word for word in words if word not in sw]
    return words


def remove_punc(sentence):
    sentence = re.sub(r'[^a-zA-Z\s]', '', sentence)
    sentence = sentence.lower()
    return sentence


def generate_tokens(sentence):
    return word_tokenize(sentence)


def perform_stemming(sentence):
    words = preprocess_text(sentence)
    return words


@myApp.route('/techniques', methods=['POST'])
def techniques():
    data = request.json
    sentence = data['sentence']
    type_of_performance = data['type']
    if type_of_performance == 'remove punctuation':
        return jsonify({
            'message': 'done',
            'sentence': remove_punc(sentence)
        })
    elif type_of_performance == 'tokenize words':
        return jsonify({
            'message': 'done',
            'sentence': generate_tokens(sentence)
        })
    elif type_of_performance == 'remove stopwords':
        return jsonify({
            'message': 'done',
            'sentence': remove_stopwords(sentence)
        })
    else:
        return jsonify({
            'message': 'done',
            'sentence': perform_stemming(sentence)
        })


if __name__ == '__main__':
    myApp.run(debug=True)
