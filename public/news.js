import os from 'os';
document.getElementById('sample').innerHTML=`Printing ${os.getenv('NEWS_API_KEY')}`;