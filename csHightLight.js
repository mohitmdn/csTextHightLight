!(function ($) {
    var defaults = {
        'background': '#fdd835',
        'color': '#008D4C',
        'class': '',
        'list': []
    }
    var methods = {
        init: function (options) {
            var settings = $.extend(defaults, options);
            return this.length && settings.list.length ? this.each(function () {
                var t = this;
                
                for (var i = 0; i < settings.list.length; i++) {
                    var l = settings.list[i];
                    console.log(l);
                    if (l && l != '') {
                        var s = settings;
                        s.text = l.toUpperCase();
                        highLight(t, s);
                    }
                }

            }) : this;

        },
        destroy: function (options) {
            $(this).removeClass('csInit');
            return this.find(".csHighLight").each(function () {
                this.parentNode.firstChild.nodeName;
                with (this.parentNode) {
                    replaceChild(this.firstChild, this);
                }
            });
        }
    };

    function highLight(node, options) {
        var skip = 0;
        if (node.nodeType == 3) {
            var pos = node.data.toUpperCase().indexOf(options.text);
            pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
            if (pos >= 0) {
                var span = document.createElement('span');
                span.className = 'csHighLight ' + options.class;
                span.style = "color:" + options.color + ';background:' + options.background;
                var m = node.splitText(pos);
                var endbit = m.splitText(options.text.length);
                var middleclone = m.cloneNode(true);
                span.appendChild(middleclone);
                m.parentNode.replaceChild(span, m, options);
                skip = 1;
            }
        }
        else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += highLight(node.childNodes[i], options);
            }
        }
        return skip;
    }

    $.fn.csTextHightLight = function (opts) {
        if (methods[opts]) {
            return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof opts === 'object' || !opts) {
            // Default to "init"
            if ($(this).hasClass('csInit')) {
                return;
            }
            else {
                $(this).addClass('csInit');
                return methods.init.apply(this, arguments);
            }
        } else {
            $.error('Method ' + opts + ' does not exist on csHighLight');
        }
    };
})(jQuery);