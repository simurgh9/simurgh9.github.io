import numpy as np
from matplotlib import pyplot as plt

j = [0]
PATH = 't10k-images-idx3-ubyte'
RNG = np.random.default_rng(3)

with open(PATH, 'rb') as f:
    arr = bytearray(f.read())
    magic_number = int.from_bytes(arr[:4], byteorder='big')
    num_examples = int.from_bytes(arr[4:8], byteorder='big')
    rows = int.from_bytes(arr[8:12], byteorder='big')
    cols = int.from_bytes(arr[12:16], byteorder='big')
    data = np.array(arr[16:]).reshape(num_examples, rows, cols)


def inc(_=None):
    j[0] = (j[0] + 1) % data.shape[0]
    plt.cla()
    plt.title('$' + str(j[0]) + '^{th}$ Data Point')
    plt.imshow(data[j[0]], cmap='gray')
    plt.draw()


plt.gcf().canvas.mpl_connect('key_press_event', inc)
inc()
plt.show()

ep, K = 3.5, 10
X = data.reshape(data.shape[0], data.shape[1] * data.shape[2])

means = means = X[RNG.integers(0, X.shape[0], K)]  # initial means
# implement K-means here

rows, columns = 2, 5
fig = plt.figure(figsize=(15, 7))
for i, cj in enumerate(means):
    fig.add_subplot(rows, columns, i+1)
    plt.imshow(cj.reshape(28, 28), cmap='grey')

plt.tight_layout()
plt.show()
