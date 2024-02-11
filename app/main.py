from pydantic import BaseModel
from fastapi import FastAPI
import openai

app = FastAPI()

openai.api_key = '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'

class Input(BaseModel):
    text: str

@app.post('/')
async def root(input : Input):
    try:
        content = "Only inlcude the names, action, and amount in the response. First word is the person doing the action, the second word is the action, and the third word is the second person involved. No more than 4 words. here is an example(your response should not have parentheses at all and just return those 4 words, wit just spaces): 'tyler sent justin 50' REMEMBER YOUR RESPONSE SHOULD ONLY RETURN 4 WORDS ONLY NOTHING ELSE.Here is the input - " + input.text + "-"
        #We want 4 words, first one user thats doing the action, second one is going to be the action, the third is second user thats recieving the action, and the fourth an the integer. Heres an example: \"Sender action reciever integer\" Only send 4 words, with one space in between each word. Here is the input-" + input.text + "-"

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613",
            max_tokens=10,
            messages=[{"role": "user", "content": content}]
        )

        generated_text = response.choices[0].message.content
        
        return {'generated_text': generated_text}
    
    except Exception as e:
        return {'error': str(e)}