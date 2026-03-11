import numpy as np
from itertools import permutations
from matplotlib import pyplot as plt

RNG = np.random.default_rng(0)


def plot_board(board):
    chessboard_pattern = np.indices(board.shape).sum(axis=0) % 2
    plt.imshow(chessboard_pattern, cmap='grey')
    plt.xticks(range(8), ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])
    plt.yticks(range(8), ['8', '7', '6', '5', '4', '3', '2', '1'])
    plt.tick_params(labeltop=True, labelright=True)
    Q = chr(9819)
    rows, cols = np.where(board == 1)
    for i, j in zip(rows, cols):
        plt.text(j,
                 i,
                 Q,
                 fontsize=32,
                 ha='center',
                 va='center',
                 color='orange')
    plt.tight_layout()
    plt.show()


def fitness(board):
    pass


def selection(boards, fitnesses):
    pass


def mutate(board):
    pass


def crossover(x, y, out):
    pass


if __name__ == '__main__':
    SIZE, p, ep = 100, 0.005, 0.0001
    # implement your genetic algorithm here
