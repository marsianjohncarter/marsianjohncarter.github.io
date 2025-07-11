import CommitGraph from '@/components/commit-graph/commit-graph';

export default function GitHubOverview() {
    return (
        <div
            className="overflow-auto scrollbar-hidden relative size-full max-w-[90%] md:max-w-5xl mx-auto my-10 hidden lg:block"
            style={{
                color: 'rgb(255, 255, 255)',
                width: '971px',
                height: '447px',
                boxShadow:
                    '22.35px 22.35px 25px 2px color-mix(in srgb, var(--t-shadow) 20%, transparent),             22.35px 22.35px 50px 5px color-mix(in srgb, var(--t-shadow) 25%, transparent),             22.35px 22.35px 100px 10px color-mix(in srgb, var(--t-shadow) 30%, transparent),             22.35px 22.35px 250px 30px color-mix(in srgb, var(--t-shadow) 40%, transparent)',
                borderRadius: '22px',
                '--t-shadow': 'rgba(0, 0, 0, 0.5)',
                WebkitTransition:
                    'boxShadow 0.3s var(--spring-easing), border-radius 0.3s var(--spring-easing)',
                transition:
                    'boxShadow 0.3s var(--spring-easing), border-radius 0.3s var(--spring-easing)',
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 size-full"
                style={{
                    WebkitTransition:
                        'filter 0.3s var(--spring-easing), transform 0.3s var(--spring-easing)',
                    transition:
                        'filter 0.3s var(--spring-easing), transform 0.3s var(--spring-easing)',
                }}
            >
                <div
                    className="size-full"
                    style={{
                        background: 'rgba(16, 4, 4, 0.84)',
                        WebkitTransition:
                            'background 0.3s var(--spring-easing)',
                        transition: 'background 0.3s var(--spring-easing)',
                    }}
                />
            </div>
            <div
                className="relative flex size-full flex-col overflow-hidden"
                style={{
                    borderColor: 'rgba(143, 143, 143, 0.6)',
                    borderStyle: 'double',
                    borderRadius: '22px',
                    WebkitTransition: 'border-radius 0.3s var(--spring-easing)',
                    transition: 'border-radius 0.3s var(--spring-easing)',
                    borderWidth: '3px',
                }}
            >
                <div className="h-[50px] w-full shrink-0 border-b border-b-transparent px-[18px]  flex items-center gap-[8px]">
                    <div className="flex items-center gap-[7px]">
                        <div
                            className="size-[13px] rounded-full "
                            style={{
                                backgroundColor: 'red',
                            }}
                        />
                        <div className="size-[13px] rounded-full bg-amber-300" />
                        <div
                            className="size-[13px] rounded-full"
                            style={{
                                backgroundColor: 'green',
                            }}
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col gap-10 p-6">
                    <div className="relative z-0 flex h-[138px] gap-8 p-1.5">
                        <div className="aspect-square rounded-full border border-theme-border bg-theme-secondary">
                            <img
                                className="size-full rounded-full object-cover"
                                src="https://avatars.githubusercontent.com/u/116607327?s=128&v=4"
                            />
                        </div>
                        <div className="flex flex-1 justify-between font-medium">
                            <div className="flex flex-col gap-2">
                                <h1 className="line-clamp-1 text-ellipsis text-4xl font-semibold tracking-tight">
                                    gleb
                                </h1>
                                <span className="flex items-center gap-2 text-nowrap">
                                    <span>@loeclos</span>
                                    <div className="size-1.5 rounded-full bg-current opacity-70" />
                                    <span className="flex items-center gap-1 text-nowrap">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-user-round"
                                        >
                                            <circle cx={12} cy={8} r={5} />
                                            <path d="M20 21a8 8 0 0 0-16 0" />
                                        </svg>
                                        264
                                        <span className="opacity-70">
                                            Followers
                                        </span>
                                    </span>
                                    <div className="size-1.5 rounded-full bg-current opacity-70" />
                                    <span className="inline-flex items-center gap-1.5 text-nowrap">
                                        262
                                        <span className="opacity-70">
                                            Following
                                        </span>
                                    </span>
                                </span>
                                <p className="line-clamp-2 max-w-sm text-wrap font-normal opacity-70">
                                    "Do or do not, there is no try." - Yoda{' '}
                                </p>
                            </div>
                            <div className="flex h-full shrink-0 flex-col items-end gap-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={56}
                                    height={56}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="mb-auto"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <p className="line-clamp-1 text-nowrap opacity-70">
                                    646 Commits
                                </p>
                                <p className="line-clamp-1 text-nowrap opacity-70">
                                    4 Years
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 overflow-auto scrollbar-hidden">
                        <div
                            className="space-y-1"
                            style={{
                                height: '163px',
                            }}
                        >
                            <div className="line-clamp-1 flex items-center gap-3 text-nowrap text-sm font-medium">
                                <h5 className="font-semibold">2025</h5>
                                <span className="opacity-70">135 Commits,</span>
                                <span className="opacity-70">19 Days,</span>
                                <span className="flex items-center gap-1 opacity-70">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-flame"
                                    >
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                                    </svg>{' '}
                                    4 Days
                                </span>
                            </div>
                            <CommitGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
