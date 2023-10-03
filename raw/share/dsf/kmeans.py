import numpy as np
from matplotlib import pyplot as plt

# Don't change the seed or use a different Generator
RNG = np.random.default_rng(3)
normal = RNG.multivariate_normal

t, n = 3, 4*2500
X = normal([-t, t], np.identity(2), n // 4)
X = np.vstack((X, normal([t, t], np.identity(2), n // 4)))
X = np.vstack((X, normal([t, -t], np.identity(2), n // 4)))
X = np.vstack((X, normal([-t, -t], np.identity(2), n // 4)))
plt.title('Unlabelled Data Clusters')
plt.xlabel('x--axis')
plt.ylabel('y--axis')
plt.scatter(X[:, 0], X[:, 1], marker='.', color='k', alpha=0.3)
plt.show()
