import inquirer from 'inquirer';

const questions = [
    {
      type: 'input',
      name: 'Tipo_de_gasto',
      message: "Cual fue el tipo de gasto?",
    },
    {
      type: 'input',
      name: 'Gasto',
      message: "Cuanto se gasto?",
    }
];

export const PromptUser = async () => {
  return await inquirer.prompt(questions);
}
