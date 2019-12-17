<style>
    .loader {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
        transform: rotate(45deg);
        transform-origin: 32px 32px;
    }

    .loader div {
        top: 23px;
        left: 19px;
        position: absolute;
        width: 26px;
        height: 26px;
        background: var(--app-primary-color);
        animation: loader 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .loader div:after,
    .loader div:before {
        content: " ";
        position: absolute;
        display: block;
        width: 26px;
        height: 26px;
        background: var(--app-primary-color);
    }

    .loader div:before {
        left: -17px;
        border-radius: 50% 0 0 50%;
    }

    .loader div:after {
        top: -17px;
        border-radius: 50% 50% 0 0;
    }

    @keyframes loader {
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
        padding-top: 10%;
    }

</style>

<div class="loading">
    <div class="loader">
        <div></div>
    </div>
</div>
