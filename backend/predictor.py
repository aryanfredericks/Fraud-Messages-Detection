import numpy as np
class FraudPredictor():
    def __init__(self,model,vector):
        self.model = model
        self.vector = vector
    
    def perform_prediction(self):
        prediction = self.model.predict(self.vector)
        result = np.argmax(prediction)
        if result == 0:
            return "Not a Spam"
        return "Spam"