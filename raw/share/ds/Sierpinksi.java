import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Toolkit;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Sierpinksi extends JPanel {
    public static void main(String[] args) {
        Toolkit kit = Toolkit.getDefaultToolkit();
        Dimension screenSize = kit.getScreenSize();
        JFrame frame = new JFrame();
        frame.setTitle("Sierpinksi's Triangle");
        frame.setSize(screenSize.width / 2, screenSize.height / 2);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new Sierpinksi());
        frame.setVisible(true);
    }
    public void paintComponent(Graphics g) {
        CoordinateList ls = new CoordinateList();
        sierpinski(0, 0, getWidth(), getHeight(), ls);
        while (!ls.isEmpty()) {
            Coordinates c = ls.take();
            g.drawRect(c.x, c.y, c.w, c.h);
        }
    }
    public void sierpinski(int x, int y, int w, int h, CoordinateList ls) {
        // recursively add the coordinates (x, y, w, h) to ls.
        return;
    }
}