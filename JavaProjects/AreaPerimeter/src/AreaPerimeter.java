/*
 * This program will calculate area and perimeter 
 * Lee Knoyer 
 * 6-6-19 
 * JDK Version 1.8.0
*/
import java.text.DecimalFormat;
import javax.swing.JOptionPane;

public class AreaPerimeter {

    public static void main(String[] args) {
        String input = JOptionPane.showInputDialog (null, 
                "What is the length of the rectangle?");
        double length = Double.parseDouble(input);
        input = JOptionPane.showInputDialog (null,
                "What is the width of the rectangle?");
        double width = Double.parseDouble(input);
        double area = length * width;
        double perimeter = (2*length) + (2*width);
        DecimalFormat pattern = new DecimalFormat("###.##");
        JOptionPane.showMessageDialog(null,
                "Length: " + pattern.format(area)
                + "\nWidth: " + pattern.format(width)
                + "\nArea: " + pattern.format(area)
                + "\nPerimeter: " + pattern.format(perimeter));
    }
    
}
