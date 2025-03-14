import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = NextAuth({
	// Configure one or more authentication providers

    // console.log(process.env.GITHUB_ID);

	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
		// ...add more providers here
	],
});

export { authOptions as GET , authOptions as POST};
