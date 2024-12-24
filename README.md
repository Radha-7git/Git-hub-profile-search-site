# Git-hub-profile-search-site
A simple web application that allows users to search for GitHub profiles by username. The app fetches and displays information such as profile picture, followers, following, and repositories using the GitHub API. Built with HTML, CSS, and JavaScript, this tool offers a clean, responsive design for a seamless user experience.

# GitHub Profile Search Application

The GitHub Profile Search Application is a web-based tool designed to search and display detailed information about GitHub users. Using the GitHub API, this app allows users to enter a GitHub username and fetch relevant profile data. The application is built with a focus on clean, responsive design and offers a user-friendly interface.

## Key Features

- **User Profile Search**: Search for any GitHub user by entering their username.
- **Profile Details**: View essential GitHub profile information such as profile picture,followers, following, and no of repositories.
- **Responsive Design**: Optimized for both desktop and mobile devices to ensure a seamless experience across different screen sizes.
- **GitHub API Integration**: Fetches user data dynamically from the GitHub API, ensuring real-time updates.

## Technologies Used

- **HTML**: Structure and layout of the application.
- **CSS**: Styling and responsive design to enhance the user experience.
- **JavaScript**: Handles API requests, dynamic content rendering, and interaction with the user interface.
- **GitHub API**: Provides access to GitHub user data.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/github-profile-search-app.git

## API Usage
The application makes requests to the GitHub API to fetch user data. The API endpoint used is:
https://api.github.com/users/{username}
Where `{username}` is replaced with the GitHub username entered by the user. The response includes the user's profile information, such as their name, bio, followers, following, repositories, and more.

## How to Use
Enter a GitHub username in the search bar.
Click "Search" to retrieve and display the user's GitHub profile information.
View the profile details, including profile picture,followers, following, and no of repositories.

## Future Improvements

- **Add local storage**: Implement a feature to remember previous searches so users don't have to re-enter the same username every time.
- **Display additional information**: Show more detailed data about the repositories, such as stars, forks, and the number of issues.
- **Implement error handling**: Add error messages for invalid inputs or issues with API requests, ensuring a better user experience.
- **Enhance the user interface**: Introduce more interactive features and a polished design to improve the overall look and feel of the application.

## License
This project is licensed under the MIT License.

