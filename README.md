# Chuckle 😆

**Chuckle** is a VS Code extension that generates mock API data based on TypeScript declarations by utilizing the power of large language models (LLMs). Say goodbye to manual mock data creation and let Chuckle do the work for you, freeing up your time to focus on writing code that matters.

## Features

- **Automatic Mock Data Generation**: Simply feed your TypeScript interface or type declarations, and Chuckle will generate realistic mock data for you in seconds.
- **Seamless Integration**: Works right within your VS Code environment for a smooth and intuitive experience.
- **Customizable Output**: Tweak the generated mock data to match your specific requirements, ensuring it fits your needs.
- **Instant Feedback**: Get real-time mock data without the hassle of leaving your editor.

## How It Works

1. Highlight or select the TypeScript declaration (interface or type) you want to generate mock data for.
2. Invoke the Chuckle extension through the command palette or use the context menu option.
3. Chuckle will automatically generate mock data and display it directly in your code or as a suggestion.

### Example

For the following TypeScript declaration:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
```
Chuckle might generate mock data like this:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "isActive": true
}
```
## Installation
1. Open the Extensions view in VS Code.
2. Search for "Chuckle" and click Install.
3. Once installed, use Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) to open the command palette and search for Preferences. Set `chuckle.llm.apiKey` to the API key for your provider (OpenAI by default).
4. Use Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) to open the command palette and search for "Chuckle" commands.

## Requirements
- VS Code v1.94.0 or later.
- TypeScript project with type and interface declarations for API resources.

## Configuration
Chuckle comes with default settings for generating mock data, but you can customize the output by adjusting settings in your VS Code settings.json or preferences UI. For example, you can tweak the LLM provider and model. More configuration options are coming in the future.

## Known Issues
- Chuckle works best with standard TypeScript types and interfaces. Complex types may require further tweaking.
- Output may vary based on the context of your project and the type complexity.

## Contributing
If you have suggestions or run into any issues, feel free to contribute by opening an issue or submitting a pull request.

## License
MIT License

Enjoy using Chuckle and make mock data generation fun again!