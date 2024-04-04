import telebot
import requests
import json

print('Hello')

BASE_URL='https://fakestoreapi.com'

bot = telebot.TeleBot("6488964828:AAHMV24mH3Yo3rJ_d2y_tCiL2pjH9h4bTkI")


@bot.message_handler(commands=['start'])
def send_welcome(message):
        bot.send_message(message.chat.id, f'<i>Hello, <a href="tg://user?id={message.from_user.id}">{message.from_user.first_name}</a> \nMy name is ***** \nHow can I help you?</i>',
        parse_mode='HTML')
       

@bot.message_handler(commands=['help'])
def help(message):
     bot.send_message(message.chat.id,'Now i have 3 commands\n/help - information about commands\n/start - welcome information\n/categories - categories of products')

@bot.message_handler(commands=['categories'])
def categories(message):

    
    
    response1 = (requests.get(f"{BASE_URL}/products"))

    with open('data.json','w') as f:
        json.dump(response1.json(),f)
    print("file was saved seccesfully")
    
    response = (requests.get(f"{BASE_URL}/products/categories"))    # Writing in file

    mylist=list()
    for i in range(0,len(response.json())):     # Creating json str
        mylist.append(response.json()[i])
    mystr='\n'.join(mylist)


    markup = telebot.types.InlineKeyboardMarkup()   # Creating button
    #markup.add(telebot.types.InlineKeyboardButton('Пойти нахуй',url='tg://user?id='+str(message.from_user.id)))        #button with url
    markup.add(telebot.types.InlineKeyboardButton(mylist[0],callback_data=mylist[0]))
    markup.add(telebot.types.InlineKeyboardButton(mylist[1],callback_data=mylist[1]))
    markup.add(telebot.types.InlineKeyboardButton(mylist[2],callback_data=mylist[2]))
    markup.add(telebot.types.InlineKeyboardButton(mylist[3],callback_data=mylist[3]))



    bot.send_message(message.chat.id,mystr,reply_markup=markup)   # Sending message
    #y=list((response().json()).keys())
    #print(y)
    

@bot.callback_query_handler(func=lambda call:True)
def callback_inine(call):
    try:
        with open('data.json') as f:
            data=json.load(f)
        if call.message:

            if call.data=='electronics':
                new_list=[]
                print(len(data))
                new_str=''
                for i in range(len(data)):
                    if data[i]['category']=='electronics':
                        new_list.append(data[i])
                
                for i in range(0,len(new_list)):
                    new_str='ID: '+str(new_list[i]['id'])+'\nTitle: '+new_list[i]['title']+'\nPrice: '+str(new_list[i]['price'])+'\nDescription: '+new_list[i]['description']+'\nCategory: '+new_list[i]['category']+'\nImage: '+new_list[i]['image']+'\nRating: '+str(new_list[0].get('rating',{}).get('rate'))+' Rate count: '+str(new_list[0].get('rating',{}).get('count'))
                    bot.send_message(call.message.chat.id,new_str)      # Electronics


            if call.data=='jewelery':
                new_list=[]
                print(len(data))
                new_str=''
                for i in range(len(data)):
                    if data[i]['category']=='jewelery':
                        new_list.append(data[i])
                
                for i in range(0,len(new_list)):
                    new_str='ID: '+str(new_list[i]['id'])+'\nTitle: '+new_list[i]['title']+'\nPrice: '+str(new_list[i]['price'])+'\nDescription: '+new_list[i]['description']+'\nCategory: '+new_list[i]['category']+'\nImage: '+new_list[i]['image']+'\nRating: '+str(new_list[0].get('rating',{}).get('rate'))+' Rate count: '+str(new_list[0].get('rating',{}).get('count'))
                    bot.send_message(call.message.chat.id,new_str)
                
            if call.data=="men's clothing":
                new_list=[]
                print(len(data))
                new_str=''
                for i in range(len(data)):
                    if data[i]['category']=="men's clothing":
                        new_list.append(data[i])
                
                for i in range(0,len(new_list)):
                    new_str='ID: '+str(new_list[i]['id'])+'\nTitle: '+new_list[i]['title']+'\nPrice: '+str(new_list[i]['price'])+'\nDescription: '+new_list[i]['description']+'\nCategory: '+new_list[i]['category']+'\nImage: '+new_list[i]['image']+'\nRating: '+str(new_list[0].get('rating',{}).get('rate'))+' Rate count: '+str(new_list[0].get('rating',{}).get('count'))
                    bot.send_message(call.message.chat.id,new_str)

            if call.data=="women's clothing":
                new_list=[]
                print(len(data))
                new_str=''
                for i in range(len(data)):
                    if data[i]['category']=="women's clothing":
                        new_list.append(data[i])
                
                for i in range(0,len(new_list)):
                    new_str='ID: '+str(new_list[i]['id'])+'\nTitle: '+new_list[i]['title']+'\nPrice: '+str(new_list[i]['price'])+'\nDescription: '+new_list[i]['description']+'\nCategory: '+new_list[i]['category']+'\nImage: '+new_list[i]['image']+'\nRating: '+str(new_list[0].get('rating',{}).get('rate'))+' Rate count: '+str(new_list[0].get('rating',{}).get('count'))
                    bot.send_message(call.message.chat.id,new_str)
                
    except Exception as e:
        print(repr(e))


@bot.message_handler(func=lambda message: True)
def nums(message):
    bot.reply_to(message,"i don't understand what do you want")



bot.infinity_polling()


"""<b>bold</b>, <strong>bold</strong>
<i>italic</i>, <em>italic</em>
<u>underline</u>, <ins>underline</ins>
<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
<span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
<b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
<a href="http://www.example.com/">inline URL</a>
<a href="tg://user?id=123456789">inline mention of a user</a>
<tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
<code>inline fixed-width code</code>
<pre>pre-formatted fixed-width code block</pre>
<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>"""