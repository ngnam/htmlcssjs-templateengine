interface Prop {
    imageURL: string,
}

const Avatar = ({ imageURL }: Prop) => {
    return (
        <div className="w-[120px] h-[120px] ml-8 ring-[5px] ring-[#3b52d4] dark:ring-[#053bff] rounded-full ">
            {imageURL ? (
                <img
                    src={imageURL ? imageURL : 'https://github.githubassets.com/images/modules/logos/Octocat.png'}
                    width="120"
                    height="120"
                    className="rounded-full "
                />
            ) : (
                <p className="text-lg font-bold font-mono text-center pt-8 text-gray-800 dark:text-gray-200">No Image Found</p>
            )

            }
        </div>
    )
}

export default Avatar