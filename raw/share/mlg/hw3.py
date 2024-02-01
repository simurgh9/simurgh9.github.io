from sklearn.datasets import load_iris
import numpy as np
from matplotlib import pyplot as plt

iris = load_iris()
# print(iris.target_names, iris.feature_names)
eta = 0.0001
X, y = iris.data, iris.target
mask = np.bitwise_or(y == 0, y == 1)
# mask = np.bitwise_or(y == 1, y == 2)  # versicolor, virginica
X, y = X[mask], y[mask]

petal_length, sepal_length = 2, 0
X = np.vstack((X[:, petal_length], X[:, sepal_length])).T
X = np.hstack((np.ones(shape=(X.shape[0], 1)), X))

w = np.array([0, -1, 1])
w_new = w + 1
y[y == 1] = -1
y[y == 0] = 1
# y[y == 1] = 1  # versicolor
# y[y == 2] = -1  # virginica

while np.all(w_new != w):
    break # implement training here

plt.xlabel(iris.feature_names[petal_length])
plt.ylabel(iris.feature_names[sepal_length])
lb = {1: ('blue', 'setosa'), -1: ('red', 'versicolor')}
# lb = {1: ('red', 'versicolor'), -1: ('green', 'virginica')}
for g in np.unique(y):
    plt.scatter(X[:, 1][y == g],
                X[:, 2][y == g],
                alpha=0.5,
                c=lb[g][0],
                label=lb[g][1],
                s=40)

a = np.linspace(X[:, 1].min(), X[:, 1].max())
b = a # replace with the decision boundary
plt.plot(a, b, 'k', label=f'Perceptron Decision Boundary')
plt.legend()
plt.tight_layout()
plt.show()
