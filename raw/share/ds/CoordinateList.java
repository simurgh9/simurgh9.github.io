class Coordinates {
    public int x;
    public int y;
    public int w;
    public int h;
    public Coordinates next;

    public Coordinates(int x, int y, int w, int h, Coordinates next) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.next = next;
    }

    public String toString() {
        String f = "[%d, %d, %d, %d]";
        return String.format(f, this.x, this.y, this.w, this.h);
    }
}

public class CoordinateList {
    public int length;
    private Coordinates head;
    private Coordinates current;

    public CoordinateList() {
        return;
    }

    public int add(int x, int y, int w, int h) {
        return -1;
    }

    public Coordinates take() {
        return null;
    }

    public boolean isEmpty() {
        return false;
    }
}