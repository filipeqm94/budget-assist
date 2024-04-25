# Contributing to Budget Assist

First and foremost, thank you for considering contributing to Budget Assist! It's people like you that make the open-source community such a great place to learn, inspire, and create. Any contributions you make will benefit everybody else and are greatly appreciated.

## Code of Conduct

This project and everyone participating in it are governed by the [Budget Assist Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [marques.fq@gmail.com].

## What Can I Contribute?

There are many ways you can contribute to Budget Assist:

- Submit bugs and feature requests, and help us verify as they come in.
- Review source code changes.
- Review the documentation and make pull requests for anything from typos to new content.

## How to Contribute

If you are ready to contribute to the codebase, follow these steps:

1. **Fork the Repository**
   - Visit the Budget Assist GitHub page and click the "Fork" button. This creates a copy of the code under your GitHub user account.

2. **Clone the Repository**
   - On your GitHub account, go to **Your Repositories**.
   - Find the Budget Assist repository and click on "Clone or download" to copy the URL.
   - Open your command line or terminal and enter `git clone [URL you just copied]`. Replace `[URL you just copied]` with the URL.

3. **Create a Branch**
   - Navigate to the directory on your computer that you cloned the repository to.
   - Type `git checkout -b your-new-branch-name`.
   - Keep your branch focused on addressing one issue or feature to keep branches clean and manageable.
   
4. **Make Your Changes**
   - Open the files in your preferred text editor and make your changes.
   - For any logical changes in `.tsx` files, please ensure you write corresponding unit tests. We use Jest and React Testing Library for testing. All new logic must be accompanied by thorough tests to validate functionality.
   - Keep your changes succinct and focused. Add comments to your code where necessary.

5. **Commit Your Changes**
   - After making your changes, stage them with `git add .`
   - Commit your changes using `git commit -m 'Add some descriptive message here'`.

6. **Push Your Changes**
   - Push your changes using `git push origin your-new-branch-name`.

7. **Submit a Pull Request**
   - Go to the repository on GitHub.
   - You will see a `Compare & pull request` button. Click on it.
   - Ensure that the base fork is set to the original Budget Assist repository and the base branch is the one you forked from.
   - Give your pull request a title and write a brief description of your changes.

## Pull Request Guidelines

- Ensure your pull request adheres to the project's coding standards.
- Include screenshots and animated GIFs in your pull request whenever possible.
- Follow the [GitHub Flow](https://guides.github.com/introduction/flow/).
- Document new code based on any existing documentation standards.

## After Your Pull Request is Merged

Once your pull request is merged, you might want to consider contributing again by starting the process over. Additionally, your changes might be included in the next release!

## Feedback

Your feedback is welcome! If you have any suggestions or issues, please open an issue in the repository. If you have general feedback or questions, feel free to reach out to the project maintainers at [marques.fq@gmail.com].

Thank you for contributing to Budget Assist!
