import requests
import sys



def execute_POST_HTTP_Request(botID,chatID,message):

    URL = f'https://api.telegram.org/bot{botID}/sendMessage'

    print(URL)
    data = {
        "chat_id":chatID,
        "text":message
    }
    requests.post(url=URL,data=data)

if __name__ == "__main__":
    print("Initialise telegram scripts")

 
    botID = sys.argv[1]
    chatID = sys.argv[2]
    message = sys.argv[3]

    execute_POST_HTTP_Request(botID,chatID,message)
    print(chatID)