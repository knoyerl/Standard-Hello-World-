/*
 * Lee Knoyer
 * 6-21-19
 * JDK Version 1.8.0
 * This program will take a number greater than 0 roll 2 dice and tally your
 * wins, losses, and ties against the computer. 
 */

import java.util.Scanner;

public class Knoyer_DiceRoll {

    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);
        System.out.println("How many times would you like to roll the dice?");
        int userAnswer = userInput.nextInt();
        //These variables will keep a tally on wins ties and losses.
        int totalWins = 0;
        int totalTies = 0;
        int totalLosses = 0;
        /*This will re-promt the user to enter a number greater than 0 */
        while (userAnswer < 0) {
            System.out.println("How many times would you like to roll the dice?");
            userAnswer = userInput.nextInt();
        }
        /*This will roll the dice the entered number of times and tally the 
        resutls for wins, losses, and ties.*/
        while (userAnswer > 0) {
            int dieUser = (int) (Math.random() * 6 + 1);
            int dieComputer = (int) (Math.random() * 6 + 1);
            System.out.print("User rolls: " + dieUser);
            System.out.println(" Computer rolls: " + dieComputer);
            if (dieUser > dieComputer) {
                System.out.println("You win.");
                totalWins = totalWins + 1;
            } else if (dieUser == dieComputer) {
                System.out.println("You tie.");
                totalTies = totalTies + 1;
            } else {
                System.out.println("You lose.");
                totalLosses = totalLosses + 1;
            }
            userAnswer--;
            while (userAnswer == 0) {
                System.out.println("Total Wins: " + totalWins);
                System.out.println("Total Losses: " + totalLosses);
                System.out.println("Total Ties: " + totalTies);
                break;
            }
        }
    }
}
