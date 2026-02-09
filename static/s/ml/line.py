import numpy as np
from matplotlib import pyplot as plt

mean = [0, 0]
cov = [[1, 0.9],
       [0.9, 1]]

rng = np.random.default_rng()
X, Y = rng.multivariate_normal(mean, cov, 100).T
plt.plot(X, Y, 'ko', alpha=0.5)
plt.show()
