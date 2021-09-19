This program allows you to get data from a .txt file

1) First make a new XMLHttpRequest

2) Open a file that you want to get the data from using 
    open('GET', 'name-of-file', boolean)

3) Check if the status of the request is 200 which means it worked

NOTE: Older methods required you to make sure that the readystate was 4, but now when you call onload, the ready state is 4.