/*
 * The purpose of this program is to calculate interest
 * Lee Knoyer 
 * 6-2-2019 
 * JDK Version 1.8.0
*/
public class Interest {

    public static void main(String[] args) {
        //declares variables
        double loanAmount = 5000;
        int loanInterestRate = 6;
        int years = 15;
        double interest = loanAmount*(loanInterestRate/100.0)*years;
        
        //prints the values of years, loanInterstRate, loanAmount, and interest.
        System.out.println ("Years:" + years);
        System.out.println ("Rate:" + loanInterestRate);
        System.out.println ("Loan:" + loanAmount);
        System.out.println ("Interest:" + interest);
    }
    
}
