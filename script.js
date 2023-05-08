function light()
{
    if (document.getElementById("light").className.match(/(?:^|\s)active(?!\S)/))
    {
        return;
    }
    else
    {
        //switch option on theme menu
        document.getElementById('dark').classList.remove('active');
        document.getElementById('light').classList.add('active');

        //switch body color
        document.getElementById('page-container').classList.remove('bg-dark');
        document.getElementById('page-container').classList.add('bg-light');

        //switch navbar details color
        document.getElementById('menu-dropdown').classList.remove('dropdown-menu-dark');

        //switch content color
        document.getElementById('body').classList.add('bg-info');
        document.getElementById('body').classList.remove('bg-secondary','text-white');

        //switch footer color
        document.getElementById('footer').classList.add('bg-info');
        document.getElementById('footer').classList.remove('bg-secondary');
        document.getElementById('footer-text').classList.remove('text-light');
    }
}

function dark()
{
    if (document.getElementById("dark").className.match(/(?:^|\s)active(?!\S)/))
    {
        return;
    }
    else
    {
        //switch option on theme menu
        document.getElementById('dark').classList.add('active');
        document.getElementById('light').classList.remove('active');

        //switch body color
        document.getElementById('page-container').classList.add('bg-dark');
        document.getElementById('page-container').classList.remove('bg-light');

        //switch navbar details color
        document.getElementById('menu-dropdown').classList.add('dropdown-menu-dark');

        //switch content color
        document.getElementById('body').classList.remove('bg-info');
        document.getElementById('body').classList.add('bg-secondary','text-white');

        //switch footer color
        document.getElementById('footer').classList.remove('bg-info');
        document.getElementById('footer').classList.add('bg-secondary');
        document.getElementById('footer-text').classList.add('text-light');
    }
}