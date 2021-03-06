import { fetchArticles, getLatestArticle } from '../APIs/dev'
import { fetchGithubStats, fetchRepos, getLatestCommit } from '../APIs/github'
import { fetchReputation, fetchTopTech } from '../APIs/SO'
import { fetchLatest } from '../APIs/latest'
import { getUniqueVisits, getVisitorLocation } from '../APIs/visits'
import { getLatestAnswer } from '../APIs/SO'

export default function fetchAllData({dispatch}){
    fetchLatest({ dispatch })
    fetchRepos({ dispatch })
    fetchArticles({ dispatch })
    fetchReputation({ dispatch })
    fetchTopTech({ dispatch })
    fetchGithubStats({ dispatch })
    getUniqueVisits({ dispatch })
    getVisitorLocation({ dispatch })
    getLatestArticle({ dispatch })
    getLatestAnswer({ dispatch })
    getLatestCommit({ dispatch })
}