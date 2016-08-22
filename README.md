# csTextHightLight
Hightlight Text using jQuery

csTextHightLight is jQuery plugin to highlight multiple words in specific element.

# Basic  functionality 
you can pass array of words into `list` parametter
```html
<script>
 $(function () {
     $('body').csTextHightLight({  
      list: ['simply', 'by', 'readable']
    });
 });
 </script>
```
# Change class, color and background color

```html
<script>
 $(function () {
     $('body').csTextHightLight({
     list: ['simply', 'by', 'readable'],
     color:'#fff',
     class:'anotherClass',
     background:'#000'
    });
 });
 </script>
```

# destory csTextHightLight
```html
<script>
 $(function () {
     $('body').csTextHightLight('destroy');
 });
 </script>
```

You have to destroy csTextHightLight first if you want to initialize again on same element.
For exp. 
```html
<script>
 $(function () {
     $('body').csTextHightLight('destroy');
      $('body').csTextHightLight({  
       list: ['simply', 'by', 'readable']
    });
 });
 </script>
```