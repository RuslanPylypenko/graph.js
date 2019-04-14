function Graph() {
    this.init = function (id, params) {

        const CONTAINER_CLASS = 'graph';

        id.classList.add(CONTAINER_CLASS);
        fill(id, params);

        window.onresize = function() {
            id.innerHTML = '';

            fill(id, params);
        };
    };

    function setHeight(id) {
        id.style.height = window.innerHeight + 'px';
    };

    function createLine(line, height) {

        var line_container = document.createElement('div');

        Object.assign(line_container.style,
            {
                background: line.background,
                height: height + 'px'
            }
        );
        line_container.classList.add('graph_line');
        return line_container;
    };

    function createElement(element, height) {

        var elementConainer = document.createElement('span');

        Object.assign(elementConainer.style,
            {
                background: element.background,
                height: height + 'px',
                width: element.width + '%'
            }
        );
        elementConainer.classList.add('graph_element');
        return elementConainer;
    };

    function fill(id, params) {
        setHeight(id);

        var line_height = window.innerHeight / params.lines.length;

        params.lines.map(function (line) {
           var line_wrapper = id.appendChild(createLine(line, line_height));

            line.elements.map(function (element) {
                line_wrapper.append(createElement(element, line_height))
            });

            setInterval(function () {
                line_wrapper.childNodes.forEach(function (param) {

                    Object.assign(param.style,
                        {
                            background: getRandomColor(),
                        }
                    );

                });
            }, line.updateTime )
            
        });

    };

    function getRandomColor() {
        return "#"+((1<<24)*Math.random()|0).toString(16);
    }


}