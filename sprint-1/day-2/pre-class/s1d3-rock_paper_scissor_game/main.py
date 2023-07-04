import random

def get_user_choice():
    while True:
        user_choice = input("Enter your choice (rock, paper, or scissors): ").lower()
        if user_choice in ['rock', 'paper', 'scissors']:
            return user_choice
        elif user_choice == 'quit':
            print("Thanks for playing!")
            exit()
        else:
            print("Invalid choice. Please try again.")

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "draw"
    elif (
        (user_choice == 'rock' and computer_choice == 'scissors') or
        (user_choice == 'scissors' and computer_choice == 'paper') or
        (user_choice == 'paper' and computer_choice == 'rock')
    ):
        return "user"
    else:
        return "computer"

def play_game():
    user_wins = 0
    computer_wins = 0
    draws = 0

    print("Let's play Rock, Paper, Scissors!")
    print("Enter 'quit' to exit the game.")

    while True:
        user_choice = get_user_choice()
        computer_choice = get_computer_choice()

        print("You chose:", user_choice)
        print("Computer chose:", computer_choice)

        winner = determine_winner(user_choice, computer_choice)

        if winner == "draw":
            draws += 1
            print("It's a draw!")
        elif winner == "user":
            user_wins += 1
            print("You win!")
        else:
            computer_wins += 1
            print("Computer wins!")

        print("Score: User -", user_wins, "Computer -", computer_wins, "Draws -", draws)
        print()

play_game()
