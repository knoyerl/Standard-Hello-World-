/*
 * This program converts inches to feet 
 * Lee Knoyer 
 * 6-2-19
 * JDK Version 1.8.0
*/
public class InchesToFeet {
    
    public static void main(String[] args) {
        //variable declarations 
        int inches = 35;
        int feet = inches/12;
        int remainingInches = inches%12;
        
        //prints the results of total inches, feet, and remaining inches.
        System.out.println("Total Inches:" + inches);
        System.out.println("------------------------------");
        System.out.println("Feet:" + feet);
        System.out.println("Remaining Inches:" + remainingInches);
        
    }
    
}
