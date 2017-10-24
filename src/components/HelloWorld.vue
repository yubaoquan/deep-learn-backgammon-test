<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div id="playground" class="playground">
            <div class="row" v-for="row, rowIndex in playground">
                <div class="cell" v-for="cell, cellIndex in row">
                    <div class="piece black" v-if="rowIndex === 0"></div>
                    <div class="piece white" v-if="rowIndex === 1"></div>
                    <div class="cell-part left top"
                        :class="{'first-row': rowIndex === 0, 'first-colomn': cellIndex === 0 && rowIndex !== 0}"
                    >{{rowIndex === 0 ? cellIndex + 1 : ''}}</div>

                    <div class="cell-part right top"
                        :class="{'first-row': rowIndex === 0, 'last-colomn': cellIndex === row.length - 1}"
                    ></div>

                    <div class="cell-part left bottom"
                        :class="{'last-row': rowIndex === playground.length - 1, 'first-colomn': cellIndex === 0}"
                    >{{cellIndex === 0 ? rowIndex + 1 : ''}}</div>

                    <div class="cell-part right bottom"
                        :class="{'last-row': rowIndex === playground.length - 1, 'last-colomn': cellIndex === row.length - 1}"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        const playground = []
        const PLAYGROUND_SIZE = 19
        for (let i = 0; i < PLAYGROUND_SIZE; i++) {
            playground[i] = []
            for (let j = 0; j < PLAYGROUND_SIZE; j++) {
                playground[i][j] = 0
            }
        }
        return {
            playground,
            msg: 'Backgammon',
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
.playground {
    background-color: orange;
    display: inline-block;
    padding: 20px;
}
.row {
    margin: 0;
    line-height: 0;
}
.cell {
    display: inline-block;
    width: 40px;
    height: 40px;
    position: relative;
}
.piece {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 10px;
    left: 9px;
    z-index: 1;
    position: absolute;
    &.black {
        background-color: #000;
    }
    &.white {
        background-color: #fff;
    }
}
.cell-part {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid black;
    position: absolute;
    box-sizing: border-box;
    line-height: 18px;
    z-index: 0;

    &.left {
        left: 0;
        border-left: none;
        &.first-colomn {
            border-top: none;
            border-bottom: none;
            border-right: none;
            top: 10px;
            left: -10px;
        }
    }
    &.top {
        top: 0;
        border-top: none;
        &.first-row {
            border-left: none;
            border-right: none;
            border-bottom: none;
            padding-left: 15px;
            top: -10px;
        }
    }
    &.right {
        right: 0;
        border-right: none;
        &.last-colomn {
            border-top: none;
            border-bottom: none;
        }
    }
    &.bottom {
        bottom: 0;
        border-bottom: none;
        &.last-row {
            border-left: none;
            border-right: none;
        }
    }
}
</style>
