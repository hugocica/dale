import Index from '../components/pages/index';
import RelatorioIndex from '../components/pages/relatorio';
import CriadorIndex from '../components/pages/criador';
import PageNotFound from '../components/errors/404';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'index.index'
    },
    {
        path: '/relatorio',
        exact: true,
        component: RelatorioIndex,
        key: 'relatorio.index'
    },
    {
        path: '/criador',
        exact: true,
        component: CriadorIndex,
        key: 'criador.index'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
