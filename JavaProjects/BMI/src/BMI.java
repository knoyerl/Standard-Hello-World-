/*
 * Lee Knoyer
 * 6-13-19
 * JDK Version 1.8.0
 * This program will ask the user for height and weight and determine BMI
 * and BMI classification.
*/

import java.text.DecimalFormat;
import javax.swing.JOptionPane;

public class BMI {

    public static void main(String[] args) {
        /*This will bring up a dialog box for height in inches, weight in pounds
          and will determine the BMI via a calculation.*/
        String input = JOptionPane.showInputDialog(null,
                "Enter your height in inches.");
        double height = Double.parseDouble (input);
        input = JOptionPane.showInputDialog(null,
                "Enter your weight in pounds.");
        double weight = Double.parseDouble (input);
        double BMI = (weight*703)/(height*height);
        //This will determine the classification for BMI.
        String classification = " ";
        if (BMI < 16) {
            classification = "Invalid";
        } else if (BMI >= 16 && BMI < 18.5){
            classification = "Underweight";
        } else if (BMI >=18.5 && BMI < 25) {
            classification = "Healthy";
        } else if (BMI >= 25) {
            classification = "Overweight";
        } 
        //This format will clean up results to 2 decimal places
        DecimalFormat pattern = new DecimalFormat("##0.00");
        JOptionPane.showMessageDialog (null, 
                "Height: " + pattern.format(height)
                + "\nWeight: " + pattern.format(weight)
                +"\nBMI: " + pattern.format(BMI)
                +"\nClassification: " + classification);
    }
    
}
