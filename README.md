# csTextHightLight

csTextHightLight is jQuery plugin to hight multiple words in specific element.

# Basic  functionality 
you can pass array of words into `list` parametter
```html
<script>
 $(function () {
     $('body').csHightLight({  
      list: ['simply', 'by', 'readable']
    });
 });
 </script>
```
# Change class, color and background color

```html
<script>
 $(function () {
     $('body').csHightLight({
     list: ['simply', 'by', 'readable'],
     color:'#fff',
     class:'anotherClass',
     background:'#000'
    });
 });
 </script>
```

# destory csHightLight
```html
<script>
 $(function () {
     $('body').csHightLight('destroy');
 });
 </script>
```

You have to destroy csHightLight first if you want to initialize again on same element.
For exp. 
```html
<script>
 $(function () {
     $('body').csHightLight('destroy');
      $('body').csHightLight({  
       list: ['simply', 'by', 'readable']
    });
 });
 </script>
```