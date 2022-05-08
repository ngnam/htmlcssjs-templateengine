import UserProfile from './UserProfile'
import UserBio from './UserBio'
import UserStats from './UserStats'
import UserData from './UserData'

interface Prop {
    data: {
        created_at: string,
        name: string,
        login: string,
        avatar_url: string,
        bio: string,
        followers: number,
        following: number,
        public_repos: number,
        location: string,
        blog: string,
        company: string,
        twitter_username: string,
    } | any,
}
const GithubUser = ({ data }: Prop) => {
    const date = new Date(data.created_at)
    const newDate = date.toDateString().slice(4, 15)

    return (
        <div className="mx-auto mt-6 flex max-w-md min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-200 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
            <UserProfile
                name={data.name}
                date={newDate}
                username={data.login}
                imageURL={data.avatar_url}
            />

            <div className=" flex w-full md:max-w-lg flex-col space-y-6 px-6 py-3">
                <UserBio bio={data.bio} />
                <UserStats
                    repos={data.public_repos}
                    followers={data.followers}
                    following={data.following}
                />

                <UserData
                    location={data.location}
                    twitterUsername={data.twitter_username}
                    blog={data.blog}
                    company={data.company}
                />
            </div>
        </div>
    )
}

export default GithubUser
