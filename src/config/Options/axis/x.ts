/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * x Axis config options
 */
export default {
    /**
     * Set clip-path attribute for x axis element
     * @name axis․x․clipPath
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @see [Demo]()
     * @example
     * // don't set 'clip-path' attribute
     * clipPath: false
     */
    axis_x_clipPath: true,

    /**
     * Show or hide x axis.
     * @name axis․x․show
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @example
     * axis: {
     *   x: {
     *     show: false
     *   }
     * }
     */
    axis_x_show: true,

    /**
     * Set type of x axis.<br><br>
     * **Available Values:**
     * - timeseries
     * - category
     * - indexed
     * @name axis․x․type
     * @memberof Options
     * @type {String}
     * @default indexed
     * @see [Demo: indexed](https://naver.github.io/billboard.js/demo/#Chart.AreaChart)
     * @see [Demo: timeseries](https://naver.github.io/billboard.js/demo/#Chart.TimeseriesChart)
     * @see [Demo: category](https://naver.github.io/billboard.js/demo/#Data.CategoryData)
     * @example
     * axis: {
     *   x: {
     *     type: "timeseries"
     *   }
     * }
     */
    axis_x_type: "indexed",

    /**
     * Set how to treat the timezone of x values.<br>
     * If true, treat x value as localtime. If false, convert to UTC internally.
     * @name axis․x․localtime
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @example
     * axis: {
     *   x: {
     *     localtime: false
     *   }
     * }
     */
    axis_x_localtime: true,

    /**
     * Set category names on category axis.
     * This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
     * @name axis․x․categories
     * @memberof Options
     * @type {Array}
     * @default []
     * @example
     * axis: {
     *   x: {
     *     categories: ["Category 1", "Category 2", ...]
     *   }
     * }
     */
    axis_x_categories: [],

    /**
     * centerize ticks on category axis.
     * @name axis․x․tick․centered
     * @memberof Options
     * @type {Boolean}
     * @default false
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       centered: true
     *     }
     *   }
     * }
     */
    axis_x_tick_centered: false,

    /**
     * A function to format tick value. Format string is also available for timeseries data.
     * @name axis․x․tick․format
     * @memberof Options
     * @type {Function|String}
     * @default undefined
     * @see [D3's time specifier](https://github.com/d3/d3-time-format#locale_format)
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *        // for timeseries, a 'datetime' object is given as parameter
     *       format: function(x) {
     *           return x.getFullYear();
     *       }
     *
     *       // for category, index(Number) and categoryName(String) are given as parameter
     *       format: function(index, categoryName) {
     *           return categoryName.substr(0, 10);
     *       },
     *
     *        // for timeseries format specifier
     *        format: "%Y-%m-%d %H:%M:%S"
     *     }
     *   }
     * }
     */
    axis_x_tick_format: undefined,

    /**
     * Setting for culling ticks.<br><br>
     * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>
     * We can change the number of ticks to be shown by axis.x.tick.culling.max.
     * @name axis․x․tick․culling
     * @memberof Options
     * @type {Boolean}
     * @default
     * - true for indexed axis and timeseries axis
     * - false for category axis
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       culling: false
     *     }
     *   }
     * }
     */
    axis_x_tick_culling: {},

    /**
     * The number of tick texts will be adjusted to less than this value.
     * @name axis․x․tick․culling․max
     * @memberof Options
     * @type {Number}
     * @default 10
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       culling: {
     *           max: 5
     *       }
     *     }
     *   }
     * }
     */
    axis_x_tick_culling_max: 10,

    /**
     * The number of x axis ticks to show.<br><br>
     * This option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will have rough second value).
     * @name axis․x․tick․count
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       count: 5
     *     }
     *   }
     * }
     */
    axis_x_tick_count: undefined,

    /**
     * Show or hide x axis tick line.
     * @name axis․x․tick․show
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       show: false
     *     }
     *   }
     * }
     */
    axis_x_tick_show: true,

    /**
     * Show or hide x axis tick text.
     * @name axis․x․tick․text․show
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       text: {
     *           show: false
     *       }
     *     }
     *   }
     * }
     */
    axis_x_tick_text_show: true,

    /**
     * Set the x Axis tick text's position relatively its original position
     * @name axis․x․tick․text․position
     * @memberof Options
     * @type {Object}
     * @default {x: 0, y:0}
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       text: {
     *         position: {
     *           x: 10,
     *           y: 10
     *         }
     *       }
     *     }
     *   }
     * }
     */
    axis_x_tick_text_position: {x: 0, y: 0},

    /**
     * Fit x axis ticks.
     * - **true**: ticks will be positioned nicely to have same intervals.
     * - **false**: ticks will be positioned according to x value of the data points.
     * @name axis․x․tick․fit
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickFitting)
     * @see [Demo: for timeseries zoom](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickTimeseries)
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       fit: false
     *     }
     *   }
     * }
     */
    axis_x_tick_fit: true,

    /**
     * Set the x values of ticks manually.<br><br>
     * If this option is provided, the position of the ticks will be determined based on those values. This option works with timeseries data and the x values will be parsed accoding to the type of the value and data.xFormat option.
     * @name axis․x․tick․values
     * @memberof Options
     * @type {Array}
     * @default null
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       values: [1, 2, 4, 8, 16, 32, ...]
     *     }
     *   }
     * }
     */
    axis_x_tick_values: null,

    /**
     * Rotate x axis tick text.
     * - If you set negative value, it will rotate to opposite direction.
     * - Applied when [`axis.rotated`](#.axis%25E2%2580%25A4rotated) option is `false`.
     * @name axis․x․tick․rotate
     * @memberof Options
     * @type {Number}
     * @default 0
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.RotateXAxisTickText)
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       rotate: 60
     *     }
     *   }
     * }
     */
    axis_x_tick_rotate: 0,

    /**
     * Show x axis outer tick.
     * @name axis․x․tick․outer
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       outer: false
     *     }
     *   }
     * }
     */
    axis_x_tick_outer: true,

    /**
     * Set tick text to be multiline
     * - **NOTE:**
     *  > When x tick text contains `\n`, it's used as line break and 'axis.x.tick.width' option is ignored.
     * @name axis․x․tick․multiline
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.XAxisTickMultiline)
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       multiline: false
     *     }
     *   }
     * }
     * @example
     * // example of line break with '\n'
     * // In this case, 'axis.x.tick.width' is ignored
     * data: {
     *    x: "x",
     *    columns: [
     *        ["x", "long\ntext", "Another\nLong\nText"],
     *        ...
     *    ],
     * }
     */
    axis_x_tick_multiline: true,


    /**
     * Set tick width
     * - **NOTE:**
     *  > When x tick text contains `\n`, this option is ignored.
     * @name axis․x․tick․width
     * @memberof Options
     * @type {Number}
     * @default null
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       width: 50
     *     }
     *   }
     * }
     */
    axis_x_tick_width: null,

    /**
     * Set to display system tooltip(via 'title' attribute) for tick text
     * - **NOTE:** Only available for category axis type (`axis.x.type='category'`)
     * @name axis․x․tick․tooltip
     * @memberof Options
     * @type {Boolean}
     * @default false
     * @example
     * axis: {
     *   x: {
     *     tick: {
     *       tooltip: true
     *     }
     *   }
     * }
     */
    axis_x_tick_tooltip: false,

    /**
     * Set max value of x axis range.
     * @name axis․x․max
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   x: {
     *     max: 100
     *   }
     * }
     */
    axis_x_max: undefined,

    /**
     * Set min value of x axis range.
     * @name axis․x․min
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   x: {
     *     min: -100
     *   }
     * }
     */
    axis_x_min: undefined,

    /**
     * Set padding for x axis.<br><br>
     * If this option is set, the range of x axis will increase/decrease according to the values.
     * If no padding is needed in the rage of x axis, 0 should be set.
     * - **NOTE:**
     *   The padding values aren't based on pixels. It differs according axis types<br>
     *   - **category:** The unit of tick value
     *     ex. the given value `1`, is same as the width of 1 tick width
     *   - **timeseries:** Numeric time value
     *     ex. the given value `1000*60*60*24`, which is numeric time equivalent of a day, is same as the width of 1 tick width
     * @name axis․x․padding
     * @memberof Options
     * @type {Object|Number}
     * @default {}
     * @example
     * axis: {
     *   x: {
     *     padding: {
     *       // when axis type is 'category'
     *       left: 1,  // set left padding width of equivalent value of a tick's width
     *       right: 0.5  // set right padding width as half of equivalent value of tick's width
     *
     *       // when axis type is 'timeseries'
     *       left: 1000*60*60*24,  // set left padding width of equivalent value of a day tick's width
     *       right: 1000*60*60*12   // set right padding width as half of equivalent value of a day tick's width
     *     },
     *
     *     // or set both values at once.
     *     padding: 10
     *   }
     * }
     */
    axis_x_padding: {},

    /**
     * Set height of x axis.<br><br>
     * The height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.
     * @name axis․x․height
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   x: {
     *     height: 20
     *   }
     * }
     */
    axis_x_height: undefined,

    /**
     * Set default extent for subchart and zoom. This can be an array or function that returns an array.
     * @name axis․x․extent
     * @memberof Options
     * @type {Array|Function}
     * @default undefined
     * @example
     * axis: {
     *   x: {
     *     // extent range as a pixel value
     *     extent: [0, 200],
     *
     *     // when axis is 'timeseries', parsable datetime string
     *     extent: ["2019-03-01", "2019-03-05"],
     *
     *     // return extent value
     *     extent: function(domain, scale) {
     *    	 var extent = domain.map(function(v) {
     *     	    return scale(v);
     *     	 });
     *
     *   	 // it should return a format of array
     *   	 // ex) [0, 584]
     *     	 return extent;
     *     }
     *   }
     * }
     */
    axis_x_extent: undefined,

    /**
     * Set label on x axis.<br><br>
     * You can set x axis label and change its position by this option.
     * `string` and `object` can be passed and we can change the poisiton by passing object that has position key.<br>
     * Available position differs according to the axis direction (vertical or horizontal).
     * If string set, the position will be the default.
     *
     *  - **If it's horizontal axis:**
     *    - inner-right [default]
     *    - inner-center
     *    - inner-left
     *    - outer-right
     *    - outer-center
     *    - outer-left
     *  - **If it's vertical axis:**
     *    - inner-top [default]
     *    - inner-middle
     *    - inner-bottom
     *    - outer-top
     *    - outer-middle
     *    - outer-bottom
     * @name axis․x․label
     * @memberof Options
     * @type {String|Object}
     * @default undefined
     * @example
     * axis: {
     *   x: {
     *     label: "Your X Axis"
     *   }
     * }
     *
     * axis: {
     *   x: {
     *     label: {
     *        text: "Your X Axis",
     *        position: "outer-center"
     *     }
     *   }
     * }
     */
    axis_x_label: {},

    /**
     * Set additional axes for x Axis.
     * - **NOTE:** Axis' scale is based on x Axis value if domain option isn't set.
     *
     * Each axis object should consist with following options:
     *
     * | Name | Type | Default | Description |
     * | --- | --- | --- | --- |
     * | domain | Array | - | Set the domain value |
     * | tick.outer | Boolean | true | Show outer tick |
     * | tick.format | Function | - | Set formatter for tick text |
     * | tick.count | Number | - | Set the number of y axis ticks |
     * | tick.values | Array | - | Set tick values manually |
     * @name axis․x․axes
     * @memberof Options
     * @type {Array}
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.MultiAxes)
     * @see [Demo: Domain](https://naver.github.io/billboard.js/demo/#Axis.MultiAxesDomain)
     * @example
     * x: {
     *    axes: [
     *      {
     *        // if set, will not be correlated with the main x Axis domain value
     *        domain: [0, 1000],
     *        tick: {
     *          outer: false,
     *          format: function(x) {
     *             return x + "%";
     *          },
     *          count: 2,
     *          values: [10, 20, 30]
     *        }
     *      },
     *      ...
     *    ]
     * }
     */
    axis_x_axes: []
};
