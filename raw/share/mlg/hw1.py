import numpy as np
from sklearn.datasets import load_iris 
from matplotlib import pyplot as plt
from sklearn.metrics.pairwise import rbf_kernel

LAMBDA = 0.000001

# X = np.linspace(-2.5*np.pi, 2.5*np.pi).reshape((-1, 1))
# y = np.sin(X)
# X = np.hstack((X, np.ones((X.shape[0], 1))))  # bias coefficients

iris = load_iris()
data = iris.data
data = data / data.max()
data = np.vstack((data[:, 0], np.ones((data.shape[0])), data[:, 2])).T
_, idx = np.unique(data[:, 0], return_index=True)
data = data[idx]
X, y = data[:, :-1], data[:, -1]
