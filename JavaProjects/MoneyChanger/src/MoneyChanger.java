/*
 * Lee Knoyer 6-1-19
 * This program will break change into correct coins
 * JDK Version 1.8.0
*/
public class MoneyChanger {
    
    public static void main(String[] args) {
        //declaring variables 
        int cents = 630;
        int centsLeft; //temporary variable for storing remaining cents
        int dollars;
        int quarters;
        int dimes;
        int nickels;
        int pennies;
        
        //begin calculations
        dollars = cents / 100;
        centsLeft = cents % 100;
        quarters = centsLeft / 25;
        centsLeft = centsLeft % 25;
        dimes = centsLeft / 10;
        centsLeft = centsLeft % 10;
        nickels = centsLeft / 5;
        centsLeft = centsLeft % 5;
        pennies = centsLeft;
        
        //printing results 
        System.out.println("Total Cents:" + cents
                + "\nDollars:" + dollars 
                + "\nQuarters:" + quarters
                + "\nDimes:" + dimes
                + "\nNickels:" + nickels
                + "\nPennies:" + pennies);
        
    }
    
}
