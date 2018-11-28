import Index from '../components/pages/index';
import RelatorioIndex from '../components/pages/relatorio';
import CriadorIndex from '../components/pages/criador';
import ModuloB2b from '../components/pages/modulos/b2b';
import ModuloBrows from '../components/pages/modulos/brows';
import ModuloH2o2h from '../components/pages/modulos/h2o2h';
import Modulo7bl from '../components/pages/modulos/setebl';
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
        path: '/modulos/b2b',
        exact: true,
        component: ModuloB2b,
        key: 'modulos.b2b'
    },
    {
        path: '/modulos/brows',
        exact: true,
        component: ModuloBrows,
        key: 'modulos.brows'
    },
    {
        path: '/modulos/h2o2h',
        exact: true,
        component: ModuloH2o2h,
        key: 'modulos.h2o2h'
    },
    {
        path: '/modulos/7bl',
        exact: true,
        component: Modulo7bl,
        key: 'modulos.setebl'
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
