import axios from 'axios'
import { slugify } from './utils.mjs'
import path_ from './path.mjs'

/*
    Allow to load and find photo's metas in DB file 
*/

export default {
    load: () => axios.get(path_.dbUrl.href),
    findAll: (db, query) =>
        db
            .filter(
                metas =>
                    slugify(JSON.stringify(metas)).indexOf(slugify(query)) !==
                    -1
            )
            .sort((a, b) =>
                a.nameEs > b.nameEs ? 1 : b.nameEs > a.nameEs ? -1 : 0
            )
}
