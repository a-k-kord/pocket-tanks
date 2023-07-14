create table if not exists public.threads
(
    id     serial
    constraint threads_pkey
    primary key,
    title  varchar(255),
    author varchar(255),
    date   timestamp with time zone default '2021-11-24 19:47:56.024+00'::timestamp with time zone
                                                                                        );

alter table public.threads
    owner to postgres;

create table if not exists public.messages
(
    id        serial
    constraint messages_pkey
    primary key,
    title     varchar(255),
    text      text,
    author    varchar(255),
    date      timestamp with time zone default '2021-11-24 19:47:56.024+00'::timestamp with time zone,
                                                                                           rating    integer                  default 0,
                                                                                           thread_id integer
                                                                                           constraint messages_thread_id_fkey
                                                                                           references public.threads
                                                                                           on update cascade on delete cascade,
                                                                                           parent_id integer
                                                                                           constraint messages_parent_id_fkey
                                                                                           references public.messages
                                                                                           on update cascade
                                                                                           );

alter table public.messages
    owner to postgres;

create table if not exists public.users
(
    id           serial
    constraint users_pkey
    primary key,
    remote_id    varchar(255)
    constraint users_remote_id_key
    unique,
    yandex_id    varchar(255)
    constraint users_yandex_id_key
    unique,
    google_id    varchar(255)
    constraint users_google_id_key
    unique,
    name         varchar(255),
    theme        varchar(255)             default 'night'::character varying,
    tankpoints   integer,
    lang         varchar(255)             default ''::character varying,
    yandex_token varchar(255),
    google_token varchar(255),
    created_at   timestamp with time zone default '2021-11-24 19:47:56.023+00'::timestamp with time zone,
    updated_at   timestamp with time zone default '2021-11-24 19:47:56.023+00'::timestamp with time zone
                                                                                              );

alter table public.users
    owner to postgres;

create table if not exists public.user_votes
(
    id         serial
    constraint user_votes_pkey
    primary key,
    user_id    integer,
    message_id integer,
    vote       integer
);

alter table public.user_votes
    owner to postgres;

