<style>
    nav {
        height: var(--app-nav-height);
        background: var(--app-light-color);
        border-bottom: 1px solid var(--app-primary-color-light);
        box-shadow: 2px -1px 2px 0;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1;
    }

    nav div.content {
        min-width: var(--app-min-width);
        max-width: var(--app-max-width);
        margin: auto;
    }

    nav ul {
        list-style: none;
        display: flex;
        justify-content: center;
    }

    nav ul li {
        display: block;
        padding: 0 15px;
        cursor: pointer;
        font-weight: 100;
    }

    nav ul li.active {
        text-decoration: underline;
    }

    .head {
        display: flex;
    }

    .head h1 {
        flex: 1;
        color: var(--app-primary-color);
        padding: 0 0 0 5px;
        font-size: 1.2em;
    }


    @media (max-width: 450px) {
        nav {
            height: var(--app-nav-height-mobile);
        }

        .head {
            display: none;
        }

        nav ul li {
            padding-top: 3px;
        }
    }
</style>

<nav>
    <div class="content">
        <div class="head">
            <h1>twttr</h1>
        </div>
        <ul>
            <li class:active="{active === Routes.TWEETS}"
                on:click="{()=>switchApp(Routes.TWEETS)}">
                Tweets
            </li>
            <li class:active="{active === Routes.TRENDING}"
                on:click="{()=>switchApp(Routes.TRENDING)}">
                #Trending
            </li>
        </ul>
    </div>
</nav>

<script>
    import {createEventDispatcher, onMount} from 'svelte';

    const Routes = {
        TWEETS: '/',
        TRENDING: '/trending'
    };

    let active = location.pathname;
    const dispatch = createEventDispatcher();

    const switchApp = path => {
        active = path;
        window.history.pushState(null, null, path);
    };

    onMount(() => {
        const dispatchRouteEvent = () => dispatch('routeChange', location.pathname);
        window.addEventListener('popstate', () => dispatchRouteEvent());
        dispatchRouteEvent();
    });
</script>