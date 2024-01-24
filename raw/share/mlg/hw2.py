from sklearn.datasets import load_iris
import numpy as np
from matplotlib import pyplot as plt

iris = load_iris()
# print(iris.target_names)
# print(iris.feature_names)
X, y = iris.data, iris.target
data = np.hstack((X, y.reshape(-1, 1)))
petal_length, sepal_length = 2, 0

plt.xlabel(iris.feature_names[petal_length])
plt.ylabel(iris.feature_names[sepal_length])
cdict = {0: 'red', 1: 'blue', 2: 'green'}
ldict = {k: iris.target_names[k] for k in range(len(iris.target_names))}
for g in np.unique(y):
    ix = np.where(y == g)
    plt.scatter(X[:, petal_length][ix], X[:, sepal_length][ix], c=cdict[g], label=ldict[g], s=40)

plt.tight_layout()
plt.legend()
plt.show()
