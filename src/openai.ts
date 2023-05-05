import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default openai;
