import inquirer from 'inquirer';

const questions = [
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name",
    }
];

export const PromptUser = async () => {
  return await inquirer.prompt(questions);
}
