This fun web application allows users to simulate playing the classic alley dice game, "Pig Dice." Specs for behavior driven development are listed below.

| behavior |  input   |  output  |
|----------|:--------:|:--------:|
| It can return a random number 1-6 upon submit. | "Roll" | 4 |
| It will give no value to the number 1 and end player's turn. | 1 | "Your turn is over." |
| It will apply face value to numbers 2-6. | 3 | 3 |
| It will allow the player to end turn at anytime. | "Hold" | -- |
| It will allow the player to continue to roll until they choose to end turn or they roll the number 1. | 4, 3, 4, "Hold" | -- |
| If the player's turn ends by rolling the number 1, no values will be saved to their total. | 2, 3, 1 | 0 |
| If the player's turn ends by clicking hold before they roll the number 1, the values of the round's rolls will be added together. | 6, 3, 6, "Hold" | 15 |
| All individual round totals will be added together as the player's running total score. | 15, 10 | 25 |
| Once the player's running total score is greater than or equal to 100 points, the game is over. | 101 | "Game over!" |
| It will duplicate all previous features to allow another player to compete. | -- | -- |
| It will alternate turns whenever a player holds or rolls the number 1. | Player 1 "Hold" | Player 2 begins |
| It will return victory message to first player to reach 100 or more total points. | Player 1 score: 112 | "Player 1 wins!" |
| It will allow players to start a new game. | -- | -- |
