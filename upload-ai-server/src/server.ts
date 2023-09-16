import {fastify} from 'fastify';
import {fastifyCors } from '@fastify/cors'; 
import { getAllPromptsRoute } from "./routes/get-all-routes";
import {uploadVideoRoute} from './routes/upload-video';
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from './routes/generation-ai-completion';
const app = fastify();
const serverPort = 3333;

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);


app.listen({
  port: serverPort,
}).then(()=>{
  console.log(`Server running on port ${serverPort}`)
})