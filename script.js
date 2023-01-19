class Games {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    describe() {
        return `${this.name} is a ${this.genre}.`;
    }
}

class Console {
    constructor(name) {
        this.name = name;
        this.Games = [];
    }

    addGame(Games) {
        if (Games instanceof Games) {
            this.Games.push(Games);
        } else {
            throw new Error(
                `You can only add an insantce of Games. Arugment is not a Game ${Games}`
            );
        }
    }

    describe() {
        return `${this.name} has ${this.Games.length} Games .`;
    }
}

class Menu {
    constructor() {
        this.console = [];
        this.selectedConsole = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection <= 5) {
        switch (selection) {
            case '1': 
            this.createConsole();
            break;
        case '2':
            this.viewConsole();
            break;
        case '3':
            this.deleteConsole();
            break;
        case '4': 
            this.displayConsole();
            break;
        default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
        }

        alert ("Goodbye!");
    }

    showMainMenuOptions() {
        return prompt (`
        1. Add New Console
        2. View Game Consoles
        3. Delete a Console
        4. Display All Game Consoles
        5. Exit
        `);
    }

    showConsoleMenuOptions(ConsoleInfo) {
        return prompt (`
        1. Add a Game
        2. Delete a Game
        3. Go Back
        ------
        ${ConsoleInfo}
        `)
    }

    displayConsole() {
        let consoleString = "";
        for (let i = 0; i < this.Console.length; i++) {
            consoleString += i + ". " + this.Console[i].name + "\n";
        }
        alert(consoleString); 
    }

    createConsole() {
        let name = prompt("Enter name for new console:");
        this.Console.push(new Console(name));
    }

    deleteConsole() {
        let index = prompt("Select a console to delete");
        if (index > -1 && index < this.Console.length) {
            this.Console.splice(index, 1);
        }
    }

    viewConsole() { 
        let index = prompt("Enter the index of the console you wish to view: ");
        if (index > -1 && index < this.Console.length) {
            this.selectedCOnsole = this.Console[index];
            let description = "Console Name: " + this.selectedConsole.name + "\n";

            for (let i = 0; i < this.selectedConsole.Games.length; i++) {
                description +=
                '      ' + i + 
                "." +
                this.selectedConsole.Games[i].name + 
                " - " + 
                this.selectedConsole.Games[i].genre +
                "\n";
            }

            let selection = this.showConsoleMenuOptions(description);
            switch (selection) { 
                case '1':
                    this.createGames();
                    break;
                case '2': 
                    this.deleteGames();
            }
        }
    }
    createGames() {
        let name = prompt("Enter a new game:");
        let genre = prompt("Enter a new genre for the new game:");
        this.selectedConsole.Games.push(new Games(name, genre));
    }

    deleteGames() {
        let index = prompt("Select index of the game you would like to delete:");
        if (index > -1 && index < this.selectedConsole.Games.length) {
            this.selectedConsole.Games.splice(index, 1); 
        }
    }
}

let menu = new Menu();
menu.start(); 
