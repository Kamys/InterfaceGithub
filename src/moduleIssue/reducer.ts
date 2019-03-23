import { createReducer } from 'redux-act';

import actions from './actions';

const defaultState: IStateIssues = {
	issues: [
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/88",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/88/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/88/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/88/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/88",
			"id": 424436114,
			"node_id": "MDExOlB1bGxSZXF1ZXN0MjYzNzkwNzk0",
			"number": 88,
			"title": "Add Nishiki Liu's blog",
			"user": {
				"login": "nshki",
				"id": 1121087,
				"node_id": "MDQ6VXNlcjExMjEwODc=",
				"avatar_url": "https://avatars0.githubusercontent.com/u/1121087?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/nshki",
				"html_url": "https://github.com/nshki",
				"followers_url": "https://api.github.com/users/nshki/followers",
				"following_url": "https://api.github.com/users/nshki/following{/other_user}",
				"gists_url": "https://api.github.com/users/nshki/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/nshki/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/nshki/subscriptions",
				"organizations_url": "https://api.github.com/users/nshki/orgs",
				"repos_url": "https://api.github.com/users/nshki/repos",
				"events_url": "https://api.github.com/users/nshki/events{/privacy}",
				"received_events_url": "https://api.github.com/users/nshki/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 0,
			"created_at": "2019-03-22T23:41:23Z",
			"updated_at": "2019-03-22T23:41:23Z",
			"closed_at": null,
			"author_association": "NONE",
			"pull_request": {
				"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/pulls/88",
				"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/88",
				"diff_url": "https://github.com/jkup/awesome-personal-blogs/pull/88.diff",
				"patch_url": "https://github.com/jkup/awesome-personal-blogs/pull/88.patch"
			},
			"body": "Great project! Would love to add my blog to this list: https://nshki.com/."
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/86",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/86/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/86/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/86/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/issues/86",
			"id": 422503856,
			"node_id": "MDU6SXNzdWU0MjI1MDM4NTY=",
			"number": 86,
			"title": "Made a simple web app version of the list. Complete with an API!",
			"user": {
				"login": "WalkerFrederick",
				"id": 28491173,
				"node_id": "MDQ6VXNlcjI4NDkxMTcz",
				"avatar_url": "https://avatars1.githubusercontent.com/u/28491173?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/WalkerFrederick",
				"html_url": "https://github.com/WalkerFrederick",
				"followers_url": "https://api.github.com/users/WalkerFrederick/followers",
				"following_url": "https://api.github.com/users/WalkerFrederick/following{/other_user}",
				"gists_url": "https://api.github.com/users/WalkerFrederick/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/WalkerFrederick/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/WalkerFrederick/subscriptions",
				"organizations_url": "https://api.github.com/users/WalkerFrederick/orgs",
				"repos_url": "https://api.github.com/users/WalkerFrederick/repos",
				"events_url": "https://api.github.com/users/WalkerFrederick/events{/privacy}",
				"received_events_url": "https://api.github.com/users/WalkerFrederick/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 1,
			"created_at": "2019-03-19T01:34:52Z",
			"updated_at": "2019-03-19T11:20:46Z",
			"closed_at": null,
			"author_association": "CONTRIBUTOR",
			"body": "idk if this is something anyone asked for but I made it.\r\n\r\nhttps://awesome-personal-blogs.herokuapp.com/\r\n\r\nand then there is an API if you want to use it.\r\n\r\nhttps://awesome-personal-blogs.herokuapp.com/blogs\r\n\r\nIt does some web scraping to grab the list from the readme. In addition it also adds the favicon to the link. \r\n\r\n[Check out the repo!](https://github.com/WalkerFrederick/awesome-personal-blogs-site)\r\n\r\nlet me know what you think! Thanks."
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/75",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/75/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/75/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/75/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/75",
			"id": 421585611,
			"node_id": "MDExOlB1bGxSZXF1ZXN0MjYxNjA0NjQ2",
			"number": 75,
			"title": "adds Umer Farooq",
			"user": {
				"login": "umer7",
				"id": 24353882,
				"node_id": "MDQ6VXNlcjI0MzUzODgy",
				"avatar_url": "https://avatars0.githubusercontent.com/u/24353882?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/umer7",
				"html_url": "https://github.com/umer7",
				"followers_url": "https://api.github.com/users/umer7/followers",
				"following_url": "https://api.github.com/users/umer7/following{/other_user}",
				"gists_url": "https://api.github.com/users/umer7/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/umer7/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/umer7/subscriptions",
				"organizations_url": "https://api.github.com/users/umer7/orgs",
				"repos_url": "https://api.github.com/users/umer7/repos",
				"events_url": "https://api.github.com/users/umer7/events{/privacy}",
				"received_events_url": "https://api.github.com/users/umer7/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 0,
			"created_at": "2019-03-15T15:49:52Z",
			"updated_at": "2019-03-15T15:49:52Z",
			"closed_at": null,
			"author_association": "NONE",
			"pull_request": {
				"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/pulls/75",
				"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/75",
				"diff_url": "https://github.com/jkup/awesome-personal-blogs/pull/75.diff",
				"patch_url": "https://github.com/jkup/awesome-personal-blogs/pull/75.patch"
			},
			"body": "Add personal blog of Umer Farooq"
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/64",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/64/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/64/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/64/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/64",
			"id": 421277406,
			"node_id": "MDExOlB1bGxSZXF1ZXN0MjYxMzY0OTk1",
			"number": 64,
			"title": "Add Gant",
			"user": {
				"login": "GantMan",
				"id": 997157,
				"node_id": "MDQ6VXNlcjk5NzE1Nw==",
				"avatar_url": "https://avatars0.githubusercontent.com/u/997157?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/GantMan",
				"html_url": "https://github.com/GantMan",
				"followers_url": "https://api.github.com/users/GantMan/followers",
				"following_url": "https://api.github.com/users/GantMan/following{/other_user}",
				"gists_url": "https://api.github.com/users/GantMan/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/GantMan/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/GantMan/subscriptions",
				"organizations_url": "https://api.github.com/users/GantMan/orgs",
				"repos_url": "https://api.github.com/users/GantMan/repos",
				"events_url": "https://api.github.com/users/GantMan/events{/privacy}",
				"received_events_url": "https://api.github.com/users/GantMan/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 0,
			"created_at": "2019-03-14T22:42:08Z",
			"updated_at": "2019-03-14T22:42:08Z",
			"closed_at": null,
			"author_association": "NONE",
			"pull_request": {
				"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/pulls/64",
				"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/64",
				"diff_url": "https://github.com/jkup/awesome-personal-blogs/pull/64.diff",
				"patch_url": "https://github.com/jkup/awesome-personal-blogs/pull/64.patch"
			},
			"body": ""
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/51",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/51/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/51/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/51/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/51",
			"id": 421031294,
			"node_id": "MDExOlB1bGxSZXF1ZXN0MjYxMTc3Njgx",
			"number": 51,
			"title": "Added technical blog of Vaibhav",
			"user": {
				"login": "Kvaibhav01",
				"id": 11731837,
				"node_id": "MDQ6VXNlcjExNzMxODM3",
				"avatar_url": "https://avatars0.githubusercontent.com/u/11731837?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/Kvaibhav01",
				"html_url": "https://github.com/Kvaibhav01",
				"followers_url": "https://api.github.com/users/Kvaibhav01/followers",
				"following_url": "https://api.github.com/users/Kvaibhav01/following{/other_user}",
				"gists_url": "https://api.github.com/users/Kvaibhav01/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/Kvaibhav01/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/Kvaibhav01/subscriptions",
				"organizations_url": "https://api.github.com/users/Kvaibhav01/orgs",
				"repos_url": "https://api.github.com/users/Kvaibhav01/repos",
				"events_url": "https://api.github.com/users/Kvaibhav01/events{/privacy}",
				"received_events_url": "https://api.github.com/users/Kvaibhav01/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 0,
			"created_at": "2019-03-14T13:53:45Z",
			"updated_at": "2019-03-14T13:53:45Z",
			"closed_at": null,
			"author_association": "NONE",
			"pull_request": {
				"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/pulls/51",
				"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/51",
				"diff_url": "https://github.com/jkup/awesome-personal-blogs/pull/51.diff",
				"patch_url": "https://github.com/jkup/awesome-personal-blogs/pull/51.patch"
			},
			"body": ""
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/49",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/49/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/49/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/49/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/49",
			"id": 420990569,
			"node_id": "MDExOlB1bGxSZXF1ZXN0MjYxMTQ2NzQx",
			"number": 49,
			"title": "Add personal blog of Nikita Voloboev",
			"user": {
				"login": "nikitavoloboev",
				"id": 6391776,
				"node_id": "MDQ6VXNlcjYzOTE3NzY=",
				"avatar_url": "https://avatars0.githubusercontent.com/u/6391776?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/nikitavoloboev",
				"html_url": "https://github.com/nikitavoloboev",
				"followers_url": "https://api.github.com/users/nikitavoloboev/followers",
				"following_url": "https://api.github.com/users/nikitavoloboev/following{/other_user}",
				"gists_url": "https://api.github.com/users/nikitavoloboev/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/nikitavoloboev/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/nikitavoloboev/subscriptions",
				"organizations_url": "https://api.github.com/users/nikitavoloboev/orgs",
				"repos_url": "https://api.github.com/users/nikitavoloboev/repos",
				"events_url": "https://api.github.com/users/nikitavoloboev/events{/privacy}",
				"received_events_url": "https://api.github.com/users/nikitavoloboev/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 0,
			"created_at": "2019-03-14T12:27:47Z",
			"updated_at": "2019-03-14T12:27:47Z",
			"closed_at": null,
			"author_association": "NONE",
			"pull_request": {
				"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/pulls/49",
				"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/49",
				"diff_url": "https://github.com/jkup/awesome-personal-blogs/pull/49.diff",
				"patch_url": "https://github.com/jkup/awesome-personal-blogs/pull/49.patch"
			},
			"body": ""
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/48",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/48/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/48/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/48/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/48",
			"id": 420990005,
			"node_id": "MDExOlB1bGxSZXF1ZXN0MjYxMTQ2Mjcy",
			"number": 48,
			"title": "Added Lisa Dziuba",
			"user": {
				"login": "valianka",
				"id": 35335737,
				"node_id": "MDQ6VXNlcjM1MzM1NzM3",
				"avatar_url": "https://avatars0.githubusercontent.com/u/35335737?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/valianka",
				"html_url": "https://github.com/valianka",
				"followers_url": "https://api.github.com/users/valianka/followers",
				"following_url": "https://api.github.com/users/valianka/following{/other_user}",
				"gists_url": "https://api.github.com/users/valianka/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/valianka/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/valianka/subscriptions",
				"organizations_url": "https://api.github.com/users/valianka/orgs",
				"repos_url": "https://api.github.com/users/valianka/repos",
				"events_url": "https://api.github.com/users/valianka/events{/privacy}",
				"received_events_url": "https://api.github.com/users/valianka/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 0,
			"created_at": "2019-03-14T12:26:26Z",
			"updated_at": "2019-03-14T12:26:26Z",
			"closed_at": null,
			"author_association": "NONE",
			"pull_request": {
				"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/pulls/48",
				"html_url": "https://github.com/jkup/awesome-personal-blogs/pull/48",
				"diff_url": "https://github.com/jkup/awesome-personal-blogs/pull/48.diff",
				"patch_url": "https://github.com/jkup/awesome-personal-blogs/pull/48.patch"
			},
			"body": ""
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/43",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/43/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/43/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/43/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/issues/43",
			"id": 420636116,
			"node_id": "MDU6SXNzdWU0MjA2MzYxMTY=",
			"number": 43,
			"title": "What should the list look like?",
			"user": {
				"login": "jkup",
				"id": 490294,
				"node_id": "MDQ6VXNlcjQ5MDI5NA==",
				"avatar_url": "https://avatars3.githubusercontent.com/u/490294?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/jkup",
				"html_url": "https://github.com/jkup",
				"followers_url": "https://api.github.com/users/jkup/followers",
				"following_url": "https://api.github.com/users/jkup/following{/other_user}",
				"gists_url": "https://api.github.com/users/jkup/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/jkup/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/jkup/subscriptions",
				"organizations_url": "https://api.github.com/users/jkup/orgs",
				"repos_url": "https://api.github.com/users/jkup/repos",
				"events_url": "https://api.github.com/users/jkup/events{/privacy}",
				"received_events_url": "https://api.github.com/users/jkup/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 15,
			"created_at": "2019-03-13T17:48:08Z",
			"updated_at": "2019-03-20T11:22:38Z",
			"closed_at": null,
			"author_association": "OWNER",
			"body": "Hey @fjoshuajr @lipis @hugmanrique @aletaschner\r\n\r\nAll of you submitted awesome ideas for what the list should look like! PRs were coming in so fast yesterday it kind of got lost in the shuffle so I was hoping to move the conversation into a single thread.\r\n\r\nMy thinking was:\r\n\r\n1. Make it a Markdown table\r\n2. Maybe a separate table for each letter of the alphabet?\r\n3. Add at least a field for what subjects the person talks about\r\n\r\nHow does that sound? Should we do something different? Hope you don't mind but I'm gonna close the other issues in favor of discussing it all in here!\r\n\r\nThanks!"
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/42",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/42/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/42/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/42/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/issues/42",
			"id": 420634020,
			"node_id": "MDU6SXNzdWU0MjA2MzQwMjA=",
			"number": 42,
			"title": "What should the rules be?",
			"user": {
				"login": "jkup",
				"id": 490294,
				"node_id": "MDQ6VXNlcjQ5MDI5NA==",
				"avatar_url": "https://avatars3.githubusercontent.com/u/490294?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/jkup",
				"html_url": "https://github.com/jkup",
				"followers_url": "https://api.github.com/users/jkup/followers",
				"following_url": "https://api.github.com/users/jkup/following{/other_user}",
				"gists_url": "https://api.github.com/users/jkup/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/jkup/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/jkup/subscriptions",
				"organizations_url": "https://api.github.com/users/jkup/orgs",
				"repos_url": "https://api.github.com/users/jkup/repos",
				"events_url": "https://api.github.com/users/jkup/events{/privacy}",
				"received_events_url": "https://api.github.com/users/jkup/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 3,
			"created_at": "2019-03-13T17:43:41Z",
			"updated_at": "2019-03-15T17:54:58Z",
			"closed_at": null,
			"author_association": "OWNER",
			"body": "Hello all!\r\n\r\nWow this project really took off! One thing I'd love feedback on is what the rules should be for qualification on the list?\r\n\r\n1. Should we allow things like Medium pages or only personal domains?\r\n2. If someone has a company site where they blog, should we allow that?\r\n3. What about non-tech blogs?"
		},
		{
			"url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/17",
			"repository_url": "https://api.github.com/repos/jkup/awesome-personal-blogs",
			"labels_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/17/labels{/name}",
			"comments_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/17/comments",
			"events_url": "https://api.github.com/repos/jkup/awesome-personal-blogs/issues/17/events",
			"html_url": "https://github.com/jkup/awesome-personal-blogs/issues/17",
			"id": 419977592,
			"node_id": "MDU6SXNzdWU0MTk5Nzc1OTI=",
			"number": 17,
			"title": "Add a short description about the blog",
			"user": {
				"login": "dantehemerson",
				"id": 18385321,
				"node_id": "MDQ6VXNlcjE4Mzg1MzIx",
				"avatar_url": "https://avatars3.githubusercontent.com/u/18385321?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/dantehemerson",
				"html_url": "https://github.com/dantehemerson",
				"followers_url": "https://api.github.com/users/dantehemerson/followers",
				"following_url": "https://api.github.com/users/dantehemerson/following{/other_user}",
				"gists_url": "https://api.github.com/users/dantehemerson/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/dantehemerson/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/dantehemerson/subscriptions",
				"organizations_url": "https://api.github.com/users/dantehemerson/orgs",
				"repos_url": "https://api.github.com/users/dantehemerson/repos",
				"events_url": "https://api.github.com/users/dantehemerson/events{/privacy}",
				"received_events_url": "https://api.github.com/users/dantehemerson/received_events",
				"type": "User",
				"site_admin": false
			},
			"labels": [

			],
			"state": "open",
			"locked": false,
			"assignee": null,
			"assignees": [

			],
			"milestone": null,
			"comments": 2,
			"created_at": "2019-03-12T13:10:29Z",
			"updated_at": "2019-03-14T00:08:48Z",
			"closed_at": null,
			"author_association": "CONTRIBUTOR",
			"body": ""
		}
	]
	,
	error: '',
};

const reducer = createReducer({}, defaultState);

reducer.on(actions.loadingRequest, (state, payload) => (defaultState));

reducer.on(actions.loadingSuccess, (state, payload) => ({
	...state,
	...payload,
}));

reducer.on(actions.loadingFailure, (state, payload) => ({
	...state,
	...payload,
}));

export default reducer;