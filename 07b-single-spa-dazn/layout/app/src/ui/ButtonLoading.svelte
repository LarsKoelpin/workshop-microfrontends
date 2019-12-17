<style>
    .btn-loader {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
    }

    .btn-loader div {
        position: absolute;
        width: 26px;
        height: 26px;
        background: var(--app-light-color);
        animation: btn-loader 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .btn-loader div:after,
    .btn-loader div:before {
        content: " ";
        position: absolute;
        display: block;
        width: 26px;
        height: 26px;
        background: var(--app-light-color);
    }

    .btn-loader div:before {
        left: -17px;
        border-radius: 50% 0 0 50%;
    }

    .btn-loader div:after {
        top: -17px;
        border-radius: 50% 50% 0 0;
    }

    @keyframes btn-loader {
        0% {
            transform: scale(0.95);
        }
        5% {
            transform: scale(1.1);
        }
        39% {
            transform: scale(0.85);
        }
        45% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0.9);
        }
    }

    .loading {
        display: flex;
        justify-content: center;
    }

</style>

<div class="loading">
    <div class="btn-loader">
        <div></div>
    </div>
</div>
