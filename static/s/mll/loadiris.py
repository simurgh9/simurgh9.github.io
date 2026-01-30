from sklearn.datasets import load_iris
import numpy as np
from matplotlib import pyplot as plt

iris = load_iris()
X, y = iris.data, iris.target
# data = np.hstack((X, y.reshape(-1, 1)))
beta1 = iris.feature_names.index('petal length (cm)')
beta2 = iris.feature_names.index('sepal length (cm)')

plt.xlabel(iris.feature_names[beta1])
plt.ylabel(iris.feature_names[beta2])
scatter = plt.scatter(X[:, beta1], X[:, beta2], c=y, s=40)
handles, _ = scatter.legend_elements()
plt.tight_layout()
plt.legend(handles, iris.target_names)
plt.show()
